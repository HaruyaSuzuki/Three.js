// Next.js
import type { NextPage } from "next";

// React
import { useEffect  } from "react";

// Thirdparty
import {
	WebGLRenderer,
	Scene,
	PerspectiveCamera,
	BoxGeometry,
	MeshNormalMaterial,
	Mesh,
} from "three";

const Home: NextPage = () => {
	const onCanvasLoaded = (canvas: HTMLCanvasElement) => {
		if (!canvas) return;
		const width = window.innerWidth
		const height = window.innerHeight
		// init scene
		const scene = new Scene()
		const camera = new PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight)
		const renderer = new WebGLRenderer({
			canvas: canvas,
			antialias: true
		})
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setClearColor('#1d1d1d');
		renderer.setSize(width, height);
		// resize
		renderer.render(scene, camera)

		// object
		const geometry = new BoxGeometry(400, 400, 400);
		const material = new MeshNormalMaterial();
		const object = new Mesh(geometry, material);
		scene.add(object);
	}
	// handle resize
	const handleResize = ({ camera, renderer }: HandleCameraAspectParams) => {
		
		tick();

	}
	useEffect(() => {
		return () => window.removeEventListener('resize', () => handleResize)
	})
	return (
		<>
			<canvas ref={ onCanvasLoaded } />
		</>
	)
}

export default Home
