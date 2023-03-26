package ma.enova.easystock.dao.facade.history;

import ma.enova.easystock.zynerator.repository.AbstractHistoryRepository;
import ma.enova.easystock.bean.history.AchatItemHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface AchatItemHistoryDao extends AbstractHistoryRepository<AchatItemHistory,Long> {

}
