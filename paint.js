var color = "rgba(193, 96, 105, 1.000)";
		var size = 50;
		
		var path = new Path({
				segments: [],
				strokeColor: color,
				closed: false,
				strokeWidth: size,
				strokeCap: 'round'
			});
		function onMouseMove(event) {
			
		
			path.add(new Point(event.point.x, event.point.y));
			path.smooth();
		}
		function onframe(event){
			path.strokeColor += 1;
		}
		function onKeyDown(event){
			console.log(event.key);
			if(event.key === "space"){
				
				paper.project.clear();
				path = new Path({
					segments: [],
					strokeColor: color,
					closed: false,
					strokeWidth: size,
					strokeCap: 'round'
				});
			}
			if(event.key === "r"){
				path.strokeColor = "rgba(255, 27, 0, 1.000)";
			}
			if(event.key === "g"){
				path.strokeColor = "rgba(22, 255, 0, .8)";
			}
			if(event.key === "b"){
				path.strokeColor = "rgba(0, 5, 255, .8)";
			}
			if(event.key === "y"){
				path.strokeColor = "rgba(239, 231, 0, .8)";
			}
			if(event.key === "up"){
				size  = size + 10;
			}
			if(event.key === "down"){
				if(size > 10){
				size  = size - 10;
				}
			} 
			
		}