import React from "react";
import Image from "next/image";

const links = [
  {
    text: "Discord Klon",
    link: "https://discordclone.ismailtan.dev/",
    bgColor: "#404EED",
  },
  {
    text: "Three.js Satranç Oyunu",
    link: "https://chess3d.ismailtan.dev/",
    bgColor:
      "linear-gradient(45deg, rgb(254, 107, 139) 30%, rgb(255, 142, 83) 90%)",
  },
  {
    text: "Three.js Online Tank Oyunu",
    link: "https://waroftanks.ismailtan.dev/",
    bgColor: "rgba(0, 255, 0, 0.5)",
  },
  {
    text: "Github",
    link: "https://github.com/IsmailTan35",
    bgColor: "#000",
  },
  {
    text: "Linkedin",
    link: "https://www.linkedin.com/in/ismailtan35/",
    bgColor: "#0A66C2",
  },
  {
    text: "Portfolyo",
    link: "https://blog.ismailtan.dev",
    bgColor: "#F44D4D",
  },
];
// eslint-disable-next-line @next/next/no-img-element

const V2 = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            maxWidth: "450px",
            backgroundColor: "#050925",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              height: 186,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 120,
                height: 120,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  height: 100,
                  width: 100,
                  borderRadius: 50,
                  boxShadow: "0px 4px 0px 4px rgba(255,255,255,0.25)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/image/myPicture.jpg"
                  alt="İsmail Tan"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              İsmail Tan
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#fff",
              boxShadow: "0px 4px 10px 4px rgba(255,255,255,0.5)",
              zIndex: 1,
            }}
          ></div>
          <div
            className="wrapper"
            style={{
              overflowX: "hidden",
              maxWidth: "100%",
              overflowY: "auto",
              scrollbarWidth: "none",
            }}
          >
            <div
              style={{
                marginTop: 55,
                marginBottom: 55,
                display: "flex",
                flexDirection: "column",
                gap: 22,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {links.map((link, idx) => {
                return (
                  <a
                    target={"blank"}
                    href={link.link}
                    key={idx}
                    style={{
                      width: "100%",
                      maxWidth: "309px",
                      height: "max-content",
                      display: "flex",
                      justifyContent: "space-between",
                      border: "1px solid #fff",
                      borderRadius: 5,
                      background: link.bgColor,
                      alignItems: "center",
                      gap: 22,
                      padding: "7px 10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          width: 40,
                          height: 40,
                          backgroundColor: "#fff",
                          borderRadius: "100%",
                        }}
                      >
                        <div
                          style={{
                            color: "#000",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            rotate: "-45deg",
                            fontWeight: "bold",
                          }}
                        >
                          Tiso
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                      }}
                    >
                      {link.text}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default V2;
