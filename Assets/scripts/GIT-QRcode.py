import qrcode

img = qrcode.make('https://fabricasoftwarevideira.github.io/fabrica-visitas/')

type(img)
img.save("qrCodeGit.png")