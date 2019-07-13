@extends('layouts.dashboard')
@section('content')
<div class="box">
  <div class="box-header col-xs-12">
    <div class="col-xs-4">
    <h3 class="box-title">Teacher List</h3></div>
   <div class="col-md-4">
           <input type="text" id="school_name" placeholder="Search By School Name" class="myText form-control">
         </div>
        <div class= "col-md-4">
           <button id="btnSearch" class="btn btn-success search_btn search_btn-add" type="button"><b><strong>Search</strong></b></button>
        </div>
  </div>
  <div class="panel-body">
   <div class="col-md-12">
    {!! csrf_field() !!}
          @if(Session::has('message'))
          <div class="alert alert-success" style="text-align:center;">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong></strong>
          </div>
          @endif
    </div>
  </div>
  <!-- /.box-header -->
  <div class="box-body no-padding">
     <div class="col-md-12" id ="res_data">  
  </div>
  <!-- /.box-body -->
</div> 
</div> 
@endsection
@section('footer')
{!!Html::script('/public/js/teacherstatus.js')!!}
@endsection
