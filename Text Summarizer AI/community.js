document.addEventListener('DOMContentLoaded', () => {
    const communityBtn = document.getElementById("community");

    communityBtn.addEventListener('click', () => {
        let communityHTML =
            '<h1 class="center font-size-40px mstop msbot">Community</h1>' +
            '<h3 class="p center font-size-30px">This is the discussion page. Here you can talk to other people and share your thoughts and ideas.</h3>' +
            '<h3 class="p mstop mbot center font-size-20px">Start by writing something below!</h3>' +
            '<div class="community-text flex-center mstop msbot">' +
            '<textarea name="" id="write-comment" cols="30" rows="10" placeholder="Write your comment here."></textarea>' +
            '</div>' +
            '<div class="community-btn">' +
            '<button id="post-btn">Post</button>' +
            '</div>' +
            '<br>' +
            '<br>' +
            '<br>' +
            '<hr>' +
            '<div class="comment-area mstop mbot">' +
            '<div class="info">' +
            '<div class="noofcomment"></div>' +
            '</div>' +
            '<div class="comments">' +
            '<div id="comment-add" class="comment-no msbot"></div>' +
            '</div>' +
            '</div>';

        document.getElementById('body').innerHTML = DOMPurify.sanitize(communityHTML);


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
    });
});



