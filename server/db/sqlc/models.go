// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.20.0

package db

import (
	"time"

	"github.com/google/uuid"
)

type Category struct {
	ID        int64     `json:"id"`
	Name      string    `json:"name"`
	UpdatedAt time.Time `json:"updated_at"`
	CreatedAt time.Time `json:"created_at"`
}

type Image struct {
	ID        int64     `json:"id"`
	Title     string    `json:"title"`
	Src       string    `json:"src"`
	TypeID    int64     `json:"type_id"`
	UpdatedAt time.Time `json:"updated_at"`
	CreatedAt time.Time `json:"created_at"`
	ViewCount int32     `json:"view_count"`
	Filename  string    `json:"filename"`
}

type ImageCategory struct {
	ID         int64 `json:"id"`
	ImageID    int64 `json:"image_id"`
	CategoryID int64 `json:"category_id"`
}

type Session struct {
	ID           uuid.UUID `json:"id"`
	Username     string    `json:"username"`
	Email        string    `json:"email"`
	RefreshToken string    `json:"refresh_token"`
	ExpiresAt    time.Time `json:"expires_at"`
	CreatedAt    time.Time `json:"created_at"`
}

type Type struct {
	ID        int64     `json:"id"`
	Name      string    `json:"name"`
	Src       string    `json:"src"`
	UpdatedAt time.Time `json:"updated_at"`
	CreatedAt time.Time `json:"created_at"`
}

type User struct {
	Username       string    `json:"username"`
	HashedPassword string    `json:"hashed_password"`
	Email          string    `json:"email"`
	CreatedAt      time.Time `json:"created_at"`
}
