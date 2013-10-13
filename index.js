/// <reference path="CameraApp.js" />

"use strict";

document.addEventListener("deviceready", onDeviceReady, false);
var cam;

function onDeviceReady()
{
    cam = new cameraApp();
    cam.run();
   //cameraApp.getPhotoFromAlbum
    //cam.getPhotoFromAlbum();
    
}

window.MyApp = {};

$(function() {
    MyApp.app = new DevExpress.framework.html.HtmlApplication({
        namespace: MyApp,
        
        defaultLayout: "navbar",
        navigation: [
            {

                action: "#home",
            },
          {
              title: "Gallery",
              action: "#gallery",
              icon: "image"
          },
          
          {
              title: "Image",
              action: "#video",
              icon: "photo"
          }
          ,
          {
              title: "Settings",
              action: "#settings",
              icon: "preferences"
          }
        ]
    });
    MyApp.app.router.register(":view", {view: "home"});
    MyApp.app.navigate();   
});

MyApp.gallery = function ()
{

    
    
    var viewModel = {
        viewShown:function()
        {
            alert("view Shown and move back to   homepage");
            cam.getPhotoFromAlbum();

            MyApp.app.navigate("home");
        },
        toolbarItems: [
             { align: 'left', widget: 'button', options: { type: 'back', text: 'Back' } },
             { align: 'right', widget: 'button', options: { icon: 'plus' } },
             { align: 'right', widget: 'button', options: { icon: 'find' } },
             { align: 'center', text: 'Products' }
        ],
        galleryData : [
                                        
                      ],
        message: 'Welcome! to image',
        uploadImages: function ()
        {
           
            
            alert('hello upload images');
            
        }
    
    };
    return viewModel;
};

MyApp.video = function () {
    var viewModel = {
        message: 'Welcome! to video'
    };
    return viewModel;
};

MyApp.settings = function () {
    var viewModel = {
        message: 'Welcome! to Settings'
    };
    return viewModel;
};