// Vista de posts populares
db.createView(
    "popularPosts",
    "posts",
    [
      {
        $lookup: {
          from: "hearts",
          localField: "_id",
          foreignField: "targetId",
          as: "likes"
        }
      },
      {
        $project: {
          content: 1,
          likeCount: { $size: "$likes" },
          createdAt: 1
        }
      },
      {
        $match: {
          likeCount: { $gt: 10 }
        }
      },
      {
        $sort: { likeCount: -1 }
      }
    ]
  )
  
  // script para usar 
  db.popularPosts.find()