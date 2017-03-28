import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
describe('my first test', ()=>{
	it('should pass', ()=>{
		expect(true).to.equal(true);
	})
})


describe('index.htm', ()=>{
	it('should say hello 2', (done)=>{
		const indexHtml = fs.readFileSync('./src/index.html', 'utf-8');
		jsdom.env(indexHtml, (err, window)=>{
			const h2 = window.document.getElementsByTagName('h2')[0];
			expect(h2.innerHTML).equal('hello 2');
			done();
			window.close();
		})
	})
})
