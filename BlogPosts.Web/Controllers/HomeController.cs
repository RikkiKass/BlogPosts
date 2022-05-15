using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlogPosts.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace BlogPosts.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private string _connectionString;

        public HomeController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("getposts")]
        [HttpGet]
        public List<Post> GetPosts(int currentPage)
        {
            BlogPostsRepository repo = new BlogPostsRepository(_connectionString);
            return repo.GetPosts(currentPage);
        }
        [Route("getpost")]
        [HttpGet]
        public Post GetPost(int id)
        {
            BlogPostsRepository repo = new BlogPostsRepository(_connectionString);
           return repo.GetPost(id);
      
        }
        [Route("getmostrecentpostid")]
        [HttpGet]
        public int GetMostRecentPostId()
        {
            BlogPostsRepository repo = new BlogPostsRepository(_connectionString);
            return repo.GetMostRecentPost();
        }
        [Route("submitpost")]
        [HttpPost]
        public int SubmitPost(Post post)
        {
            BlogPostsRepository repo = new BlogPostsRepository(_connectionString);
            return repo.SubmitPost(post);
        }
        [Route("submitcomment")]
        [HttpPost]
        public void SubmitComment(Comment comment)
        {
            BlogPostsRepository repo = new BlogPostsRepository(_connectionString);
           repo.SubmitComment(comment);
        }

    }
}
