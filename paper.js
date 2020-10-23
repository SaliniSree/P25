class paper
{
	constructor(x,y,r)
	{
		var options={
			//adjust values so that it falls on the dustbin
			isStatic:false,
			restitution:0.09,
			friction:2.0,
			density:0.2

			}
		
		this.x=x;
		this.y=y;
		this.r=r
		this.image = loadImage('paper.png')
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		
		
			imageMode(CENTER)
			image(this.image,paperpos.x, paperpos.y+40,this.r, this.r);
		// adjust position accordingly

			// ellipseMode(RADIUS)
			// fill("white")
			// ellipse(paperpos.x, paperpos.y,this.r, this.r);
	
			
	}

}