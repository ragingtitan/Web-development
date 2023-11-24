document.addEventListener('DOMContentLoaded',()=>{
    /*Post comment methods*/
    const community=document.getElementById("post-btn");
    community.addEventListener('click',()=>{
    let commentInput = document.getElementById('write-comment');
    let commentText = commentInput.value.trim();

    if (commentText !== '') {
        // Create a new comment element
        let newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.innerHTML = '<p>' + commentText + '</p>';

        // Append the new comment to the comments area
        let commentsArea = document.getElementById('comment-add');
        commentsArea.appendChild(newComment);

        // Clear the comment input
        commentInput.value = '';

        // Update the comment count
        let commentCount = document.querySelector('.noofcomment');
        let currentCount = parseInt(commentCount.innerText.split(' ')[0]);
        commentCount.innerText = (currentCount + 1) + ' Comments';
    }
    else{
        alert("No comment!!!!");
        return;
    }  
})
})