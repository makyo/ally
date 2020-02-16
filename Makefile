static/map.svg: static/map.dot
	dot -Tsvg static/map.dot -ostatic/map.svg
	dot -Tpng static/map.dot -ostatic/map.png

.PHONY: bonghits
bonghits:
	# For lorxus...
	@echo "Makefile fixed"
