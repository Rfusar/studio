FROM python:3.10-slim as build

WORKDIR /app

COPY dist/server .

RUN apt-get update && \
    apt-get install -y \
        binutils \
        libc6-dev \
        zlib1g \
        libpthread-stubs0-dev \
        musl 

FROM busybox:1.36.1

COPY --from=build /lib/x86_64-linux-gnu/ /lib/x86_64-linux-gnu/
COPY --from=build /lib64/ /lib64/

COPY --from=build /app/server .

CMD ["./server"]

