var g6 = require('./g6')

g6.loadImage('./demo/demo_small.jpg', function(image) {
  console.log('load Image complete!');
  g6.drawCanvas('#chart1', function(ctx1, canvas1) {
    ctx1.drawImage(image, 0, 0);
    ctx1.fillText('Hello World!', 10, 50);
    var idata = g6.getImageData(canvas1);
    g6.gray(idata);
    g6.drawCanvas('#chart2', function(ctx2) {
      ctx2.putImageData(idata, 0, 0);
    });
    idata = g6.getImageData(canvas1);
    g6.bright(idata, 50);
    g6.drawCanvas('#chart3', function(ctx) {
      ctx.putImageData(idata, 0, 0);
    });
    idata = g6.getImageData(canvas1);
    g6.threshold(idata, 128);
    g6.drawCanvas('#chart4', function(ctx) {
      ctx.putImageData(idata, 0, 0);
    });
    idata = g6.getImageData(canvas1);
    var blurData = g6.blurC(idata);
    g6.drawCanvas('#chart5', function(ctx) {
      ctx.putImageData(blurData, 0, 0);
    });
    idata = g6.getImageData(canvas1);
    var sharpenData = g6.sharpen(idata);
    g6.drawCanvas('#chart6', function(ctx) {
      ctx.putImageData(sharpenData, 0, 0);
    });
    idata = g6.getImageData(canvas1);
    var sobelData = g6.sobel(idata);
    g6.drawCanvas('#chart7', function(ctx) {
      ctx.putImageData(sobelData, 0, 0);
    });
    idata = g6.getImageData(canvas1);
    var sobelData = g6.sobel(idata);
    var weights = 
    [1,  1,  1,
     1,0.7, -1,
    -1,-1 , -1];
    idata = g6.getImageData(canvas1);
    var convData = g6.convolute(idata, weights, true);
    g6.drawCanvas('#chart8', function(ctx) {
      ctx.putImageData(convData, 0, 0);
    });
    var weights = 
    [-1, -1, -1,
     -1,0.3, 1,
     1,   1, 1];
    idata = g6.getImageData(canvas1);
    var conv2Data = g6.convolute(idata, weights, true);
    g6.drawCanvas('#chart9', function(ctx) {
      ctx.putImageData(conv2Data, 0, 0);
    });
  });

  g6.view()
});