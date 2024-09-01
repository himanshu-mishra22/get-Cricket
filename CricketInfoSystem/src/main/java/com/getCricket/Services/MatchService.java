package com.getCricket.Services;


import com.getCricket.Entities.Match;

import java.util.List;
import java.util.Map;

public interface MatchService {
    //get All matches
    List<Match> getAllMatches();

    //getLive matches
    List<Match>getLiveMatches();

    //getCWCpointtable
    List<Map<String,String>>getPointTable();
}
