<section class="chat-container">
  <div class="chat-button collapsible">chat de facebook</div>
    <div class="chat-content">
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fscens%2F&tabs=messages&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>


    </div>
    
  
<!-- Your customer chat code -->
    

</section>

<script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v5.0"></script>


<script>
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
</script>