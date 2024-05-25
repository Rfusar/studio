from setuptools import setup, find_packages

setup(
    name="APPstudio",
    version="0.0.1",
    packages=find_packages(),
    install_requires=[
        "fastapi",
        "uvicorn",
        "jinja2",
        "pymongo",
    ],
    entry_points={
        "console_scripts": [
            "start= scripts.start:main",
            "build= scripts.build:main",
            "github= scripts.github:main",
            "exe= scripts.eseguibile:main"
        ],
    },
)

