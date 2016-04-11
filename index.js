var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self = require("sdk/self");

var button = ToggleButton({
  id: "cricinfo",
  label: "cricinfo",
  icon: {
    "16": "./cricket.png",
    "32": "./cricket.png",
    "64": "./cricket.png"
  },
  onChange: handleChange
});

var panel = panels.Panel({
  width: 350,
  height: 500,
  contentURL: self.data.url("score.html"),
  onHide: handleHide
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}