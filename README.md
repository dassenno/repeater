Component for the Crafty HTML5/JavaScript game engine for handling input events of gamepad devices. Also contains a GamepadMultiway component for moving an entity with a gamepad.

Crafty.e('2D, DOM, Gamepad')
    .gamepad(0)
    .bind('GamepadKeyChange', function (e) {
        console.log('Button ' + e.button + ', Value ' + e.value);
    })
    .bind('GamepadAxisChange', function (e) {
        console.log('Axis ' + e.axis + ', Value ' + e.value);
    });

Crafty.e('2D, DOM, GamepadMultiway') // Entity can be controlled with gamepad
    .gamepadMultiway({
        speed: 2,
        gamepadIndex: 0
    });
The HTML5 Gamepad API is yet experimental and subject to change. Expect this code to break until the Gamepad API is stable. So far has only been tested with Google Chrome and Xbox 360 controllers.

Licensed under MIT License.
