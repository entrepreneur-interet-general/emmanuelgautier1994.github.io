image_name = site-archifiltre
pwd = $(shell pwd)

all: devServer

runProd : prod
	sudo docker run \
		--rm \
		-p 8000:8000 \
		-it \
		$(image_name):prod

devServer: dev
	sudo docker run \
		--rm \
		-p 8000:8000 \
		--mount type=bind,source=$(pwd),target=/mnt,readonly \
		-it \
		$(image_name):dev

dev: cleanContainer
	sudo docker build \
		--target=dev \
		--tag=$(image_name):dev \
		.

prod: cleanContainer
	sudo docker build \
		--tag=$(image_name):prod \
		.

clean: cleanContainer

cleanContainer:
	sudo docker container prune -f


dist='./archifiltre.github.io'

cloneAndCleanDist:
	sudo rm -fr $(dist)
	git clone git@github.com:archifiltre/archifiltre.github.io.git $(dist)
	cd $(dist) && find . -maxdepth 1 \
		-not -path '\.' \
		-not -path '\./\.*' \
		-not -path '\./README.md' \
		-not -path '\./LICENSE' \
		| xargs -I {} rm -fr {}

bundle: prod cloneAndCleanDist
	sudo docker run \
		--rm \
		-d \
		--name=$(image_name) \
		$(image_name):prod sh
	sudo docker cp $(image_name):/usr/src/app/dist/. $(dist)
	sudo docker container rm $(image_name)
	sudo chmod -R 777 $(dist)

install: bundle
	cd $(dist) && git add . && git commit -m 'commit' && git push