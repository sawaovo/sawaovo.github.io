var posts=["posts/Crazyb-Songs.html","posts/Niki-2023birthday.html","posts/Niki-8THanniversary.html","posts/Niki-POWEROFYOU.html","posts/Niki-activity-stories.html","posts/Niki-idolprojectCN.html","posts/Niki-main-stories.html","posts/Niki-profile.html","posts/Niki-resource.html","posts/Niki-relation.html","posts/Niki-scout-stories.html","posts/Niki-timeline.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};