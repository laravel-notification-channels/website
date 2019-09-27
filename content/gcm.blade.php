@extends('_includes.base')

@section('body')
    @include('_includes.readgh', ['repoName' => 'gcm', 'deprecated' => true])
@stop
