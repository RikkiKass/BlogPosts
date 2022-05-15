using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace BlogPosts.Data
{
   public class BlogPostsRepository
    {
        private string _connectionString;
            public BlogPostsRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Post> GetPosts(int pageNumber)
        {
            using var context = new BlogPostsDataContext(_connectionString);
            return context.Posts.Include(p => p.Comments).OrderBy(p => p.DateSubmitted).Skip(pageNumber * 3).Take(3).ToList();

        }
        public Post GetPost(int id)
        {
            using var context = new BlogPostsDataContext(_connectionString);
            return context.Posts.Include(p => p.Comments).FirstOrDefault(p => p.Id == id);
            

        }
        public int GetMostRecentPost()
        {
            using var context = new BlogPostsDataContext(_connectionString);
            return context.Posts.OrderBy(p => p.DateSubmitted).Last().Id;

        }
 
        
        public int SubmitPost(Post post)
        {
            using var context = new BlogPostsDataContext(_connectionString);
            context.Posts.Add(post);
            context.SaveChanges();
            return post.Id;
        }
        public void SubmitComment(Comment comment)
        {
            using var context = new BlogPostsDataContext(_connectionString);
            context.Comments.Add(comment);
            context.SaveChanges();
        }
        
    }
}
