# Tech stack
- Payload CMS
- NextJS
- MongoDB

# Installation

### Install the following:
- `yarn` or `npm`
- `mongodb` 

## Run in local server

### Setup environment variables

Create a `.env` file with the following content:

```
{
    PORT=3000
    PAYLOAD_SECRET=<SECRET_KEY>
    MONGODB_URI=<MONGODB_SERVER>
    NEXT_PUBLIC_SERVER_URL=http://localhost:3000
    PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
}
```

Replace the `SECRET_KEY` and `MONGODB_SERVER` with the correct values. Coordinate with the project owner for this.

> Note: Do not commit the `.env` file to git repository.


### 1. Connect to mongodb cluster

<ul>
    <li>
        In  your terminal, run `mongosh "mongodb+srv://uitph.kmjeil9.mongodb.net/" --apiVersion 1 --username <code>USERNAME</code>`
        <ul>
            <li>Note: Coordinate with the project owner to get the database <strong>USERNAME</strong></li>
        </ul>
    </li>
</ul>

### 2a. If installed via `yarn`.

<ol>
    <li>In terminal, run <code>yarn install</code> in the root of this project.</li>
    <li>In terminal, run <code>yarn dev</code></li>
</ol>

### 2b. If installed via `npm`.

<ol>
    <li>In terminal, run <code>npm install</code> in the root of this project.</li>
    <li>In terminal, run <code>npm dev</code></li>
</ol>