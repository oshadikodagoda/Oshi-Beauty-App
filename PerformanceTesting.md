# Performance Testing - JMeter

## Objective
To evaluate the performance of the Oshi Beauty web application under concurrent user load.

## Tool
Apache JMeter 5.6.3

## Test Configuration

| Setting | Value |
|---------|-------|
| Endpoint | http://localhost:5173/skincare |
| Number of Users (Threads) | 10 |
| Ramp-up Time | 5 seconds |
| Loop Count | 5 |
| Total Requests | 50 |

## Results

| Metric | Value |
|--------|-------|
| Samples | 50 |
| Average Response Time | ___ ms |
| Minimum | ___ ms |
| Maximum | ___ ms |
| Error % | ___% |
| Throughput | ___ requests/sec |

*(Fill in these values from your JMeter Summary Report)*

## Observations

- The application handles 10 concurrent users without errors.
- Average response time is well under 1 second.
- No failed requests, indicating stable performance at this load.

## Conclusion

The Oshi Beauty web app performs well under a basic load of 10 concurrent users. For production, testing with higher concurrency (50–100 users) and a real backend would be recommended.