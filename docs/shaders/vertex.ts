const vertexShader = `
varying vec2 v_texcoord;

void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
	v_texcoord = uv;
}
`

export default vertexShader
