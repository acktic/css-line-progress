<svg fill="none" viewBox="0 0 400 400" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
            <style>
#dots {
  position: fixed;
}
.fill {
  background-color: #000 !important;
  width: 4px;
  height: 4px;
  position: fixed;
  border-radius: 50%;
  visibility: hidden;
  z-index: -12;
  left: -4px;
  top: 0;
}
  .dots {
    animation: move 3s infinite cubic-bezier(.1,.75,1,.3) !important;
  }
  .dots:nth-of-type(2){
    animation: move 3s 150ms infinite cubic-bezier(.1,.75,1,.3) !important;
  }
  .dots:nth-of-type(3) {
    animation: move 3s 300ms infinite cubic-bezier(.1,.75,1,.3) !important;
  }
  .dots:nth-of-type(4) {
    animation: move 3s 450ms infinite cubic-bezier(.1,.75,1,.3) !important;
  }
  .dots:nth-of-type(5) {
    animation: move 3s 600ms infinite cubic-bezier(.1,.75,1,.3) !important;
  }
</style>
          <div id='dots'>
              <div class="fill"></div>
              <div class="fill"></div>
              <div class="fill"></div>
              <div class="fill"></div>
              <div class="fill"></div>
          </div>
        </div>
    </foreignObject>
</svg>
