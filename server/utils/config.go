package util

import (
	"time"

	"github.com/spf13/viper"
)

type Config struct {
	Environment          string        `mapstructure:"ENVIRONMENT"`
	DBDriver             string        `mapstructure:"DB_DRIVER"`
	DBSource             string        `mapstructure:"DATABASE_URL"`
	MigrationURL         string        `mapstructure:"MIGRATION_URL"`
	JsonPath             string        `mapstructure:"JSON_PATH"`
	BucketName           string        `mapstructure:"BUCKET_NAME"`
	ServerAddress        string        `mapstructure:"SERVER_ADDRESS"`
	TokenSymmetricKey    string        `mapstructure:"TOKEN_SYMMETRIC_KEY"`
	AccessTokenDuration  time.Duration `mapstructure:"ACCESS_TOKEN_DURATION"`
	RefreshTokenDuration time.Duration `mapstructure:"REFRESH_TOKEN_DURATION"`
	MasterUsername       string        `mapstructure:"MASTER_USERNAME"`
	MasterEmail          string        `mapstructure:"MASTER_EMAIL"`
	MasterPassword       string        `mapstructure:"MASTER_PASSWORD"`
	ImageFetchLimit      int           `mapstructure:"IMAGE_FETCH_LIMIT"`
}

func LoadConfig(path string) (config Config, err error) {
	viper.AddConfigPath(path)
	viper.SetConfigName("app")
	viper.SetConfigType("env")

	viper.AutomaticEnv()

	err = viper.ReadInConfig()
	if err != nil {
		return
	}

	err = viper.Unmarshal(&config)
	return
}
