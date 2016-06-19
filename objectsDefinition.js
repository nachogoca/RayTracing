// Objects definition
// Here the user can modify and add objects and source lights to the scene.

function addObjects() {
    var objects = [];
    
    /// USER CODE GOES HERE
    
    var sphere = new Sphere();
    sphere.position = [0.0, 1.0, 0.0, 1.0];
    sphere.color = [0.0, 0.5, 0.75, 1.0];
    sphere.material = [0.2, 0.75, 0.0, 0.0];
    objects.push(sphere);
    
    
    sphere = new Sphere();
    sphere.position = [0.0, 5.0, 1.0, 2.0];
    sphere.color = [0.75, 0.3, 0.1, 1.0];
    sphere.material = [0.3, 1.0, 0.0, 0.0];
    objects.push(sphere);
    
    /*
    sphere = new Sphere();
    sphere.position = [0.0, 5.1, 0.0, 1.0];
    sphere.color = [0.0, 1.0, 0.0, 1.0];
    sphere.material = [0.5, 0.56, 0.0, 0.0];
    objects.push(sphere);
    /*
    sphere = new Sphere();
    sphere.position = [1.0, -1.0, -3.0, .5];
    sphere.color = [0.0, 1.0, 0.0, 0.75];
    sphere.material = [0.5, 0.56, 0.0, 0.0];
    objects.push(sphere);
    
    sphere = new Sphere();
    sphere.position = [1.0, -1.0, 3.0, 0.25];
    sphere.color = [1.0, 0.0, 0.0, 1.0];
    sphere.material = [0.5, 0.56, 0.0, 0.0];
    objects.push(sphere);
    */
    ///
    
    return objects;
}


// Here the user can modify and add source lights to the scene.
function addSourceLights(){
    var lights = [];
    
    /// USER CODE GOES HERE
    var light = new Light();
    light.position = [0.0, -2.0, 0.0, 0.0];
    light.color = [0.0, 1.0, 1.0, 1.0];
    lights.push(light); 
    
    
     var light = new Light();
    light.position = [0.0, 3.5, 0.0, 0.0];
    light.color = [1.0, .75, 1.0, 1.0];
    lights.push(light); 
    
    
    
    
    
    ///
    
    return lights;
}