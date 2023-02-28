const commentFormHandler = async (event) => {
    event.preventDefault();
    
    const newCommentForm = document.querySelector('.new-comment-form');
    const blogId = newCommentForm.dataset.blogid;
    const commentDescription = document.querySelector('#comment_description').value.trim();
    
    if (commentDescription) {
      try {
        console.log("Testing post for comments");
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({ blog_id: blogId, comment_description: commentDescription }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log("Post for comments complete");
        if (response.ok) {
          document.location.reload();
        } else {
          throw new Error('Failed to create comment');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  
  document.querySelector('.new-comment-form').addEventListener('submit', commentFormHandler);
  