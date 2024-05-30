const canvas = document.getElementById("gameCanvas"); // Get the canvas element by its ID
const ctx = canvas.getContext("2d"); // Get the 2D drawing context of the canvas
canvas.width = 600; // Set the width of the canvas
canvas.height = 400; // Set the height of the canvas

const ball = { // Define the ball object with properties
    x: canvas.width / 2, // Initial x position (center of the canvas)
    y: canvas.height / 2, // Initial y position (center of the canvas)
    dx: 2, // Horizontal speed
    dy: -2, // Vertical speed
    radius: 10, // Radius of the ball
    color: "#123456" // Color of the ball
};

function drawBall() { // Function to draw the ball
    ctx.beginPath(); // Begin a new path for drawing
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2); // Draw a circle (arc) representing the ball
    ctx.fillStyle = ball.color; // Set the fill color for the ball
    ctx.fill(); // Fill the ball with the specified color
    ctx.closePath(); // Close the drawing path
}

function update() { // Function to update the ball's position and handle animation
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas
    drawBall(); // Draw the ball at its new position

    // Check for collision with the walls and reverse direction if needed
    if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) ball.dx = -ball.dx; // Reverse horizontal direction on collision
    if (ball.y + ball.dy > canvas.height - ball.radius || ball.y + ball.dy < ball.radius) ball.dy = -ball.dy; // Reverse vertical direction on collision

    ball.x += ball.dx; // Update the ball's horizontal position
    ball.y += ball.dy; // Update the ball's vertical position

    requestAnimationFrame(update); // Request the next frame to continue the game loop
}

update(); // Start the game loop by calling the update function
