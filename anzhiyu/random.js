var posts=["posts/Crazyb-Songs.html","posts/Niki-2023birthday.html","posts/Niki-2-4THanniversary.html","posts/Niki-TwitterX.html","posts/Niki-8THanniversary.html","posts/Niki-activity-stories.html","posts/Niki-encounter.html","posts/Niki-idolprojectCN.html","posts/Niki-main-stories.html","posts/Niki-relation.html","posts/Niki-profile.html","posts/Niki-resource.html","posts/Niki-scout-stories.html","posts/Niki-specialday.html","posts/Niki-theartofshiina.html","posts/Niki-timeline.html","posts/Niki-voice.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };