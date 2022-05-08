import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
const AllQuotes = React.lazy(() => import("./AllQuotes"));
const QuoteDetail = React.lazy(() => import("./QuoteDetail"));
const NewQuotes = React.lazy(() => import("./NewQuotes"));

const Quote = () => {
  return (
    <Suspense
      fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<AllQuotes />} />
        <Route path=":quoteID/*" element={<QuoteDetail />} />
        <Route path="new" element={<NewQuotes />} />
      </Routes>
    </Suspense>
  );
};

export default Quote;
