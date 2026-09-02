const axios = require('axios')

const API_BASE = (process.env.BLOG_API_URL || 'https://cms.efemrl.xyz').replace(/\/+$/, '')
const SITE = process.env.BLOG_SITE || 'lnc'

const POST_TIMESTAMPS = {}

function applyBlogLastUpdated ($page) {
  const ts = POST_TIMESTAMPS[$page.path]
  if (!ts) return
  const display = formatDateTime(ts)
  DISPLAY_TO_TIMESTAMP[display] = ts
  $page.lastUpdated = display
}

const DISPLAY_TO_TIMESTAMP = {}

function sitemapDateFormatter (lastUpdated) {
  const ts = DISPLAY_TO_TIMESTAMP[lastUpdated]
  return new Date(ts || lastUpdated).toISOString()
}

function renderBody (post) {
  if (post.format === 'md' && post.body) return post.body

  return `<div class="blog-post-body" v-pre>${post.html}</div>`
}

function escapeAttr (value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function normalisePost (raw) {
  if (!raw || !raw.slug || !raw.title) return null

  const created = Number(raw.created_at)
  const updated = Number(raw.updated_at)

  return {
    slug: String(raw.slug).replace(/^\/+|\/+$/g, ''),
    title: String(raw.title),
    createdAt: Number.isFinite(created) && created > 0 ? created : null,
    updatedAt: Number.isFinite(updated) && updated > 0 ? updated : null,
    html: raw.html ? String(raw.html) : '',
    body: raw.body ? String(raw.body) : '',
    format: raw.format === 'html' ? 'html' : 'md',
  }
}

async function fetchPosts () {
  const url = `${API_BASE}/s/${SITE}`

  try {
    const res = await axios.get(url, { timeout: 15000 })
    const list = (res.data && res.data.articles) || []

    const posts = list.map(normalisePost).filter(Boolean)
    posts.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))

    console.log(`Fetched ${posts.length} blog posts from ${url}`)
    return posts
  } catch (e) {
    const status = e.response ? ` (HTTP ${e.response.status})` : ''
    console.error(`Failed to fetch blog posts from ${url}${status}: ${e.message}`)
    return []
  }
}

function formatDateTime (ts) {
  if (!ts) return ''
  return new Date(ts).toLocaleString('en-AU', {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit', timeZone: 'UTC', timeZoneName: 'short',
  })
}

function formatDate (ts) {
  if (!ts) return ''
  return new Date(ts).toLocaleDateString('en-AU', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  })
}

function postPage (post) {
  const path = `/blog/${post.slug}/`
  if (post.updatedAt || post.createdAt) POST_TIMESTAMPS[path] = post.updatedAt || post.createdAt

  const date = formatDate(post.createdAt)

  return {
    path,
    frontmatter: { title: post.title },
    content: [
      `<h1 v-pre>${escapeAttr(post.title)}</h1>`,
      date ? `<p class="blog-meta">${escapeAttr(date)}</p>` : '',
      renderBody(post),
    ].filter(Boolean).join('\n\n'),
  }
}

function indexPage (posts) {
  const items = posts.length
    ? posts.map(p => {
        const date = formatDate(p.createdAt)
        return [
          `<li class="blog-item">`,
          `<h2><a href="/blog/${escapeAttr(p.slug)}/">${escapeAttr(p.title)}</a></h2>`,
          date ? `<p class="blog-meta">${escapeAttr(date)}</p>` : '',
          `</li>`,
        ].filter(Boolean).join('\n')
      }).join('\n')
    : '<li class="blog-item"><p>No posts yet.</p></li>'

  return {
    path: '/blog/',
    frontmatter: { title: 'Blog' },
    content: `# Blog\n\n<ul class="blog-list" v-pre>\n\n${items}\n\n</ul>`,
  }
}

function blogSidebar (posts) {
  return [
    {
      title: 'Blog',
      collapsable: false,
      children: [['/blog/', 'All posts']].concat(
        posts.map(p => [`/blog/${p.slug}/`, p.title])
      ),
    },
  ]
}

async function blogPages () {
  const posts = await fetchPosts()
  return {
    pages: [indexPage(posts)].concat(posts.map(postPage)),
    sidebar: blogSidebar(posts),
  }
}

module.exports = {
  blogPages,
  fetchPosts,
  normalisePost,
  applyBlogLastUpdated,
  sitemapDateFormatter,
  POST_TIMESTAMPS,
}
