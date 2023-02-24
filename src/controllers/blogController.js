import { blogs } from "../model/blogs.js"

//group of function
class blogController{
    //functions
    static async getBlogs(req,res){
        try {
            res.status(200).json({
                data:blogs,
            })
        } catch (error) {
            console.log("error");
            res.status(500).json({
                message: "Server error",
            })
        }

    }
    static async createBlog(req,res){
        try {
            const {title,content,author}=req.body;
            const id=blogs.length+1;
            const newblog={id,title,author,content};
            blogs.push(newblog);
            res.status(201).json({
                message: "New blog has been created",
                data: newblog,
            })
        } catch (error) {
            console.log("error");
            res.status(500).json({
                message: "Server error",
            })
        }
    }
    static async updateBlog(req,res){
// console.log(req.params.id); is passed whenever we test the api
        try {
            const {title,content}=req.body;
            // const id=req.params.id;   using ES5
            const {id}=req.params; //usind ES6
const blogId=Number(id);
            const blogToBeUpdated=blogs.find(blog=> blog.id===blogId);
if (!blogToBeUpdated) {
    return res.status(404).json({
        message:`blog with id ${blogId} is not found`
    })
}else 
blogToBeUpdated.title=title;
blogToBeUpdated.content=content;
return res.status(200).json({
  message:"Blog updayed sucessful",
  data: blogs,

});
        } catch (error) {
            console.log("error");
            res.status(500).json({
                message: "Server error",
            })
    
}
    }
    static async deleteBlog(req,res){
        try {
            const {id}=req.params;
            const blogId=Number(id);
            const index=blogs.findIndex(blog => blog.id===blogId)
            if (index===-1) {
                res.status(500).json({
message:`Blog with index ${index} was not found`,
                })
                
            }
            else{
                blogs.splice(index,1);
                return res.status(200).json({
                    message:"Blog deleted sucessful",
                    data: blogs,
                  
                  });
            }
        } catch (error) {
            
        }
    }
} 
export default blogController