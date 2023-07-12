export const filter = (type,Bookmarks,setfiltering)=>{
    let result = [];
    if(type==='all') {
        setfiltering([...Bookmarks])
    } else if (type==='Product') {
        result = Bookmarks.filter(el=>{
            return el.type === 'Product'
        })
        setfiltering([...result]);
    } else if (type==='Category') {
        result = Bookmarks.filter(el=>{
            return el.type === 'Category'
        })
        setfiltering([...result]);
    } else if (type==='Exhibition') {
        result = Bookmarks.filter(el=>{
            return el.type === 'Exhibition'
        })
        setfiltering([...result]);
    } else if (type==='Brand') {
        result = Bookmarks.filter(el=>{
            return el.type === 'Brand'
        })
        setfiltering([...result]);
    }
}

export const Additem = (e,Bookmarks,setBookmarks,data) => {
    const {id,type,title,sub_title,brand_name,price,discountPercentage,image_url,brand_image_url,follower} = data;
    const Book_index = Bookmarks.findIndex(el=>el.id === id);
        if(Book_index === -1) {
            e.target.style.color='yellow'
            Bookmarks.push({
                id : id,
                type : type,
                title : title,
                sub_title : sub_title,
                brand_name: brand_name,
                price : price,
                discountPercentage : discountPercentage,
                image_url : image_url,
                brand_image_url : brand_image_url,
                follower:follower,
            })
            setBookmarks([...Bookmarks]);
        } else {
            
            e.target.style.color='#eee'
            Bookmarks.splice(Book_index,1);
            setBookmarks([...Bookmarks]);
        }
}