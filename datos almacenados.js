// script para obtener usuarios activos
db.system.js.insertOne({
    _id: "getActiveUsers",
    value: function(days) {
      var cutoffDate = new Date(new Date().setDate(new Date().getDate() - days));
      return db.users.aggregate([
        {
          $lookup: {
            from: "posts",
            localField: "_id",
            foreignField: "userId",
            as: "recentPosts"
          }
        },
        {
          $match: {
            "recentPosts.createdAt": { $gte: cutoffDate }
          }
        },
        {
          $project: {
            username: 1,
            email: 1,
            recentPostCount: { $size: "$recentPosts" }
          }
        }
      ]).toArray();
    }
  })
  
  // script para usar datos alma.
  db.eval("getActiveUsers(30)")