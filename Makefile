DB_URL=postgresql://root:secret@localhost:5432/monta_no_mori?sslmode=disable

# postgresコンテナをDocker上で作成する
postgres:
	docker run --name monta_no_mori-db -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:14-alpine

access:
	docker exec -it monta_no_mori-db psql -U root

createdb:
	docker exec -it monta_no_mori-db createdb --username=root --owner=root monta_no_mori

dropdb:
	docker exec -it monta_no_mori-db dropdb monta_no_mori

migrateup:
	migrate -path server/db/migration -database "$(DB_URL)" -verbose up

migrateup1:
	migrate -path server/db/migration -database "$(DB_URL)" -verbose up 1

migratedown:
	migrate -path server/db/migration -database "$(DB_URL)" -verbose down

migratedown1:
	migrate -path server/db/migration -database "$(DB_URL)" -verbose down 1

new_migration:
	migrate create -ext sql -dir server/db/migration -seq $(name)

sqlc:
	cd server/ && sqlc generate

frontend:
	cd client/ && npm run dev

server:
	cd server/ && go run main.go

# 全部起動させる
dc-up:
	docker-compose build && docker-compose up

dc-down:
	docker compose down

update-cors-setting:
	cd client/ && gsutil cors set cors-config.json gs://monta_free_image

.PHONY: postgres createdb dropdb migrateup migratedown access server dc-up dc-down sqlc