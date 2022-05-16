from fastapi import FastAPI
import datetime
import pandas as pd
import json

import uvicorn
from prophet.serialize import model_from_json
from Models.feedback import FeedBack

app = FastAPI()

@app.get("/bitcoin")
def bitcoin_pred():
    with open('C:\\Users\\visha\\OneDrive\\Desktop\\REACT\\Project\\crypto\\backhand\\ML\\models\\Bitcoin.json', 'r') as fin:
        m = model_from_json(json.load(fin))

        future = pd.Series(
            pd.date_range(str(datetime.datetime.today()), freq="D", periods=1),
            name="ds"
        ).dt.strftime('%Y-%m-%d').to_frame()
        # return future
        # future.tail()
        forecast = m.predict(future)
        return forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].to_dict()


if __name__ == "__main__":
    uvicorn.run("main:app")    
