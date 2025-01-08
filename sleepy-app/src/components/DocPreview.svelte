<script>
    let isHovered = false;
    let mouseX = 0;
    let mouseY = 0;
  
    function handleMouseEnter() {
      isHovered = true;
    }
  
    function handleMouseLeave() {
      isHovered = false;
    }
  
    function handleMouseMove(event) {
      mouseX = event.offsetX;
      mouseY = event.offsetY;
    }
  </script>
  
  <div
    class="box"
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    on:mousemove={handleMouseMove}
  >
    {#if isHovered}
      <div
        class="hover-effect"
        style="left: {mouseX}px; top: {mouseY}px;"
      ></div>
    {/if}
  
    <p>Documentation Preview</p>
  </div>
  
  <style>
    .box {
      position: relative;
      width: 300px;
      height: 200px;
      background: #f5f5f5;
      border: 2px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
      text-align: center;
      line-height: 200px;
      font-family: Arial, sans-serif;
      cursor: pointer;
    }
  
    .hover-effect {
      position: absolute;
      width: 50px;
      height: 50px;
      background: rgba(100, 149, 237, 0.5);
      border-radius: 50%;
      pointer-events: none; /* Prevent the hover effect from interfering with events */
      transition: transform 0.1s ease;
      transform: translate(-50%, -50%);
    }
  </style>
  