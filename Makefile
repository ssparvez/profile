prod: build_vue copy deploy

build_vue:
	npm run build

copy:
	cp -R dist/ ../prod

deploy:
	git -C ../prod add .   
	git -C ../prod commit -am "updates"
	git -C ../prod push