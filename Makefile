static/map.svg: static/map.dot
	dot -Tsvg static/map.dot -ostatic/map.svg

.PHONY: bonghits
bonghits:
	# For lorxus...
	@echo "Makefile fixed"
