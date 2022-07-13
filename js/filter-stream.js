
class FilterStream {
  constructor(stream, shader) {
    console.log("New Filter for stream", stream);
    this.stream = stream;
    const video = document.createElement("video");
    const canvas = document.createElement("canvas");
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    video.addEventListener("playing", () => {
      // Use a 2D Canvas.
      this.canvas.width = this.video.videoWidth;
      this.canvas.height = this.video.videoHeight;

      // Use a WebGL Renderer.
      this.update();
    });
    video.srcObject = stream;
    video.autoplay = true;
    this.video = video;
    this.outputStream = this.canvas.captureStream();
  }

  update() {
    // Use a 2D Canvas
    this.ctx.drawImage(this.video, 0, 0);
    this.ctx.font = '48px serif';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.textBaseline = 'top';
    // this.ctx.textAlign = 'center';
    console.log([-this.canvas.width / 2 - 100, this.canvas.height / 2]);
    this.ctx.fillText('INSERT YOUR SUBTITLES HERE', this.canvas.width / 2 - 300, 500);
    this.ctx.save();

    // Use a WebGL renderer.
    requestAnimationFrame(() => this.update());
  }
}

export { FilterStream }