const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  

  skin: {
    name: "netflix"
  },


  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "EXTRACTION",
      description: "You're Watching",
      image: "https://img.bingewatch.to/xxrz/1200x600/529/9c/ae/9cae6636fd09700c4405a516bdccd1e9/9cae6636fd09700c4405a516bdccd1e9.jpg",
      sources: [
        {
          file:
            "https://rouf.magnewscontent.org/_v10/2332aed648dc4d2579e4b2304b0e88ceaee5971c757d3728ee99da46184e581cfb44a9c3867b38a9382fb78c1813d5071df469f3f1d9eff8917670b6e7878ecb6bcc251ff9e0b97ef78e92658272d4c4c3a3d8cf660ce4a48b5b8e928b8435a8b031cde3bf25d14bd0b434a944dbee0185498ca01b4efc5534c937e98e45aecf/1080/index.m3u8",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://rouf.magnewscontent.org/_v10/2332aed648dc4d2579e4b2304b0e88ceaee5971c757d3728ee99da46184e581cfb44a9c3867b38a9382fb78c1813d5071df469f3f1d9eff8917670b6e7878ecb6bcc251ff9e0b97ef78e92658272d4c4c3a3d8cf660ce4a48b5b8e928b8435a8b031cde3bf25d14bd0b434a944dbee0185498ca01b4efc5534c937e98e45aecf/720/index.m3u8",
          label: "720p"
        },
        {
          file:
            "https://rouf.magnewscontent.org/_v10/2332aed648dc4d2579e4b2304b0e88ceaee5971c757d3728ee99da46184e581cfb44a9c3867b38a9382fb78c1813d5071df469f3f1d9eff8917670b6e7878ecb6bcc251ff9e0b97ef78e92658272d4c4c3a3d8cf660ce4a48b5b8e928b8435a8b031cde3bf25d14bd0b434a944dbee0185498ca01b4efc5534c937e98e45aecf/480/index.m3u8",
          label: "480p"
        },
      
      ],
      captions: [
        {
          file:
            "https://cc.2cdns.com/06/ae/06aed0d834b27e787383b45a6f45210a/eng-3.vtt",
          label: "English",
          kind: "captions"
        },
        {
          file:
            "https://cc.2cdns.com/06/ae/06aed0d834b27e787383b45a6f45210a/rum-24.vtt",
          label: "Româna",
          kind: "captions",
          default: true
        },
        {
          file:
            "0",
          label: "German",
          kind: "captions"
        },
        {
          file:
            "https://raw.githubusercontent.com/iPingOi/jwplayer/main/%5BHungarian%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "Hungarian",
          kind: "captions"
        },
        {
          file:
            "https://raw.githubusercontent.com/iPingOi/jwplayer/main/%5BItalian%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "Italian",
          kind: "captions"
        },
        {
          file:
            "https://raw.githubusercontent.com/iPingOi/jwplayer/main/%5BMalayalam%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "Malayalam",
          kind: "captions"
        },
        {
          file:
            "https://raw.githubusercontent.com/iPingOi/jwplayer/main/%5BPortugu%C3%AAs%20(Portugal)%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "Portuguese",
          kind: "captions"
        },
        {
          file:
            "https://raw.githubusercontent.com/iPingOi/jwplayer/main/%5BRussian%5D%20Sprite%20Fright%20-%20Blender%20Open%20Movie.srt",
          label: "Russian",
          kind: "captions"
        },
        {
          file:
            "https://cc.2cdns.com/06/ae/06aed0d834b27e787383b45a6f45210a/spa-26.vtt",
          label: "Spanish",
          kind: "captions"
        }
      ],
      tracks: [
        {
          file: "https://rouf.magnewscontent.org/_v10/2332aed648dc4d2579e4b2304b0e88ceaee5971c757d3728ee99da46184e581cfb44a9c3867b38a9382fb78c1813d5071df469f3f1d9eff8917670b6e7878ecb6bcc251ff9e0b97ef78e92658272d4c4c3a3d8cf660ce4a48b5b8e928b8435a8b031cde3bf25d14bd0b434a944dbee0185498ca01b4efc5534c937e98e45aecf/160/index.m3u8",
          kind: "thumbnails"
        }
      ]
    }
  ],
  
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
