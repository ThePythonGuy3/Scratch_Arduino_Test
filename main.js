class Bluetooth {
    getInfo() {
        return {
            "id": "BluetoothPick",
            "name": "BluetoothPick",
            "blocks": [{
                    "opcode": "bluetoothpick",
                    "blockType": "command",
                    "text": "Pick Bluetooth device"
                },
            }],
        "menus": {
        }
    };
    bluetoothpick() {
        const connectToDeviceAndSubscribeToUpdates = async () => {
            const device = await navigator.bluetooth.requestDevice({});
        };
    };
}
