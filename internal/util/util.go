package util

import (
	"crypto/rand"
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
	"io"
)

func RandomBytesInHex(count int) string {
	buf := make([]byte, count)
	io.ReadFull(rand.Reader, buf)

	return hex.EncodeToString(buf)
}

func GenerateCodeChallenge(codeVerifier string) string {
	sha2 := sha256.New()
	io.WriteString(sha2, codeVerifier)
	return base64.RawURLEncoding.EncodeToString(sha2.Sum(nil))
}
