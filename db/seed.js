const Item = require('../model/itemModel')
const Review = require('../model/reviewModel')
const itemData = require('./seed.json')
const mongoose = require('./connection')

Item.deleteMany({}).then(() => {
    Item.collection.insertMany(itemData).then(items => {
        console.log(itemData)
    }).catch(err => {
        console.log(err)
    })

    Item.create({
        item: "Texas Outlaw",
        img: "https://prodimage.images-bn.com/pimages/9780316428163_p0_v2_s550x406.jpg",
        price: 19.60,
        inStock: true,
        itemDescription: "Texas Ranger Rory Yates is not keen for hero status. But it's unavoidable once his girlfriend, country singer Willow Dawes, writes a song about his bravery. Rory escapes his newfound fame when he's sent to the remote West Texas town of Rio Lobo, a municipality with two stoplights. And now, according to the Chief of Police, it has one too many Texas Rangers."
    }).then(tOutlaw => {
        console.log('Texas Outlaw', tOutlaw)
        Review.create({
            rating: 4,
            reviews: "Kept me riveted every time I picked it up. Was a little more than half way and couldn’t put it down. Has a a couple unexpected twists. Very enjoyable!",
            selected: tOutlaw.id
        }).then(tOutlawReview => {
            tOutlaw.review.push(tOutlaw.id)
            tOutlaw.save()
            console.log('created Texas Outlaw Review', tOutlawReview, tOutlaw)
        })
    })
       
    Item.create({
        item: "Avengers: Endgame (DVD)",
        img: "https://i5.walmartimages.com/asr/86887fb1-3e71-47e7-bd97-0d46197e575e_1.3fdedfe52d4b9c7c482ad43a71a98179.jpeg?odnWidth=450&odnHeight=450&odnBg=ffffff",
        price: 13,
        "inStock": true,
        "itemDescription": "Five years after suffering a crushing defeat and staggering losses at the hands of the evil Thanos (Josh Brolin in a motion-capture performance), Iron Man (Robert Downey, Jr.), Captain America (Chris Evans), Thor (Chris Hemsworth), and the rest of the remaining Avengers join forces with allies new and old as they travel back in time to various points in the past in a desperate attempt to obtain the powerful Infinity Stones and put things right. Thrilling, critically acclaimed, blockbuster sequel also stars Mark Ruffalo, Scarlett Johansson, Jeremy Renner.Avengers: Endgame (DVD)",
    }).then(endgame => {
        console.log('Avengers', endgame)
        Review.create({
            rating: 4,
            reviews: "Best Avengers movie to date! Great acting, with great humor, action, and a few surprises. A must for any Marvel fan.",
            selected: endgame.id
        }).then(endgameReview => {
            endgame.review.push(endgame.id)
            endgame.save()
            console.log('created Texas Outlaw Review', endgameReview, endgame)
        })
    })
    Item.create({
        item: "Morrison Rocking Recliner",
        img: "https://s3.amazonaws.com/vc-spins/production/000025/010766%7CD162664/low_resolution_spin_11.jpeg",
        price: 599,
        inStock: true,
        itemDescription: "The Morrison Rocking Recliner is a family favorite that’s designed for comfort and durability. It features a tufted back and chaise seat, plus amply padded arms to cradle you in comfort. Simply use the convenient handle on the outside arm to raise the legrest for reading, relaxing or watching TV. When you’re not reclining, it’s a relaxing rocker with a smooth, graceful motion. Make it yours with your choice of fabrics and other available upgrades.",
    }).then(recliner => {
        console.log('Recliner', recliner)
        Review.create({
            rating: 4.5,
            reviews: "I was torn between recliners and decided on this one i! It’s the best purchase I have made in a long time! Very comfortable and relaxing after a long day at work!!",
            selected: recliner.id
        }).then(reclinerReview => {
            recliner.review.push(recliner.id)
            recliner.save()
            console.log('created Recliner Review', reclinerReview, recliner)
        })
    })
    
}).then(() => {
    mongoose.connection.close()
})
