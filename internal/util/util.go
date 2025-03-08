package util

import (
	"crypto/rand"
	"encoding/hex"
	"io"
)

func RandomBytesInHex(count int) string {
	buf := make([]byte, count)
	io.ReadFull(rand.Reader, buf)

	return hex.EncodeToString(buf)
}
