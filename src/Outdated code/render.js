const { desktopCapturer, remote} = require("electron")
const {Menu} = remote

const videoElement = document.querySelector("video")
const startBtn = document.getElementById("StartBtn")
const stopBtn = document.getElementById("StopBtn")
const videoSelBtn = document.getElementById("VideoSelBtn")
videoSelBtn.onclick = () => { console.log("Hola") }


async function getVideoSources() {
    const inputSources = await desktopCapturer.getSources({
        types: ["windw", "screens"]
    })

    const videoOptionsMenu = Menu.buildFromTemplate(
        inputSources.map(source => {
            return {
                label: source.name,
                click: () => selectSource(source)
            }
        })
    )

    videoOptionsMenu.popup()
}
