// Encuentra todos los posts con más de 5 likes
db.posts.aggregate([
    {
      $lookup: {
        from: "hearts",
        localField: "_id",
        foreignField: "targetId",
        as: "likes"
      }
    },
    {
      $match: {
        $expr: { $gt: [{ $size: "$likes" }, 5] }
      }
    }
  ])
  
  // Encuentra los usuarios más activos (con más posts)
  db.users.aggregate([
    {
      $lookup: {
        from: "posts",
        localField: "_id",
        foreignField: "userId",
        as: "userPosts"
      }
    },
    {
      $project: {
        username: 1,
        postCount: { $size: "$userPosts" }
      }
    },
    {
      $sort: { postCount: -1 }
    },
    {
      $limit: 10
    }
  ])
  
  // Encuentra las ofertas de trabajo más recientes con detalles de la empresa
  db.offers.aggregate([
    {
      $lookup: {
        from: "companies",
        localField: "companyId",
        foreignField: "_id",
        as: "companyDetails"
      }
    },
    {
      $unwind: "$companyDetails"
    },
    {
      $project: {
        title: 1,
        description: 1,
        salary: 1,
        companyName: "$companyDetails.name",
        location: 1
      }
    },
    {
      $sort: { _id: -1 }
    },
    {
      $limit: 5
    }
  ])